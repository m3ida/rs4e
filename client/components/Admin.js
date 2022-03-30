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

        $.post('/admin/login', { username, password }).then((response) => {
            if (response.message === 'success') {
                setUser({ id: '0', name: username });
                sessionStorage.setItem('token', response.token);

                setTokenRequest(response.token);
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
        $.post('/api/admin').then((response) => {
            if (response.isLoggedIn) {
                setUser({ id: '0', name: reportError.username });
            }
        });
    }

    function downloadFile(postPath) {
        $.post('/admin/excel?quest=' + postPath).then((response) => {
            if (response.status === 'success') {
                $('#my_iframe').src = '/dist/files/ficheiro.xlsx';

                const link = document.createElement('a');
                link.download = 'ficheiro.xlsx';
                link.href = '/dist/files/ficheiro.xlsx';
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
                <button className='signin-button' onClick={handleLogin}>Sign In</button>
            </form>
        );
    } else {
        return (
            <>
                <button className='signout-button' onClick={handleLogout}>Sign Out</button>
                <div className='download-container'>
                    {error ? <p className='errorMessage'>{error}</p> : ''}
                    <button type='button' onClick={() => downloadFile('QuestRS4E')}>
                        Download RS4E
                    </button>
                    <button type='button' onClick={() => downloadFile('QuestUMa')}>
                        Download QuestUMA
                    </button>
                    <button type='button' onClick={() => downloadFile('QuestRS4EEmp')}>
                        Download QuestRS4EEmp
                    </button>
                    <button type='button' onClick={() => downloadFile('QuestUMaEmp')}>
                        Download QuestUMAEmp
                    </button>
                </div>
            </>
        );
    }
}

export default Admin;
