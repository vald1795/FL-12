// Your code goes here
let userMail = 'user@gmail.com';
let adminMail = 'admin@gmail.com';
let userPass = 'UserAdmin';
let adminPass = 'AdminPass';

let currentMail = prompt('Enter your mail');
if (currentMail === '' || currentMail === null) {
    alert('Canceled');
} else if (currentMail.length < 5) {
    alert('I don`t know any emails having name length less than 5 symbols');
} else if (currentMail === userMail) {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password === userPass) {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword === false) {
            alert('You have failed the change.');
        } else if (changePassword === true) {
            let oldPassword = prompt('Enter your old password');
            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (oldPassword === userPass) {
                let newPassword = prompt('Enter your new password');
                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let doublePassword = prompt('Enter your password again');
                    if (doublePassword !== newPassword) {
                        alert('You wrote the wrong password.');
                    } else if (doublePassword === newPassword) {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Wrong password');
        }
    }
} else if (currentMail === adminMail) {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password === adminPass) {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword === false) {
            alert('You have failed the change.');
        } else if (changePassword === true) {
            let oldPassword = prompt('Enter your old password');
            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (oldPassword === adminPass) {
                let newPassword = prompt('Enter your new password');
                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let doublePassword = prompt('Enter your password again');
                    if (doublePassword !== newPassword) {
                        alert('You wrote the wrong password.');
                    } else if (doublePassword === newPassword) {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you')
    }
}