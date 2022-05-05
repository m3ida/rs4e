import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';

function Admin() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const setTokenRequest = (token) => {
        $.ajaxPrefilter(function (options) {
            if (!options.beforeSend) {
                options.beforeSend = function (xhr) {
                    xhr.setRequestHeader('x-access-token', token);
                };
            }
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const username = $('form input[name=username]').val();
        const password = $('form input[name=password]').val();

        $.post('/rs4e/admin/login', { username, password }).then((response) => {
            if (response.message === 'success') {
                setUser({ id: '0', name: username });
                sessionStorage.setItem('token', response.token);

                setTokenRequest(response.token);
                setError('');
            } else {
                setError('Utilizador inválido');
            }
        });
    };
    const handleLogout = () => {
        setUser(null);
        sessionStorage.removeItem('token');
    };

    if (sessionStorage.getItem('token') && !user) {
        setTokenRequest(sessionStorage.getItem('token'));
        $.post('/rs4e/api/admin').then((response) => {
            if (response.isLoggedIn) {
                setUser({ id: '0', name: reportError.username });
            }
        });
    }

    function downloadFile(postPath) {
        $.post('/rs4e/admin/excel?quest=' + postPath).then((response) => {
            if (response.status === 'success') {

                const link = document.createElement('a');
                link.download = 'ficheiro.xlsx';
                link.href = '/rs4e/dist/files/ficheiro.xlsx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }

    if (!user) {
        return (
            <form>
                <p>
                    <label>Utilizador: </label>
                    <input type='text' name='username' autoComplete='off'></input>
                </p>
                <p>
                    <label>Password: </label>
                    <input type='password' name='password' autoComplete='off'></input>
                </p>
                {error ? <p className='errorMessage'>{error}</p> : ''}
                <button className='signin-button' onClick={handleLogin}>
                    Sign In
                </button>
            </form>
        );
    } else {
        return (
            <>
                <button className='signout-button' onClick={handleLogout}>
                    <i className='fas fa-sign-out-alt'></i> Sign Out
                </button>
                <div className='download-container'>
                    {error ? <p className='errorMessage'>{error}</p> : ''}
                    {/* <button onClick={() => downloadFile('QuestRS4E')}>
                        <i className='fas fa-download'></i>&nbsp;
                        Download RS4E
                    </button>
                    <button onClick={() => downloadFile('QuestUMa')}>
                        <i className='fas fa-download'></i>&nbsp;
                        Download QuestUMA
                    </button> */}
                    <button onClick={() => downloadFile('QuestRS4EEmp')}>
                        <i className='fas fa-download'></i>&nbsp;
                        Download QuestRS4E
                    </button>
                    <button onClick={() => downloadFile('QuestUMaEmp')}>
                        <i className='fas fa-download'></i>&nbsp;
                        Download QuestUMA
                    </button>
                </div>
            </>
        );
    }
}

export default Admin;
