let login = prompt('Enter you login, please!');
if (login == 'Admin') {
        let password = prompt('Enter you password, please!');
        if (password == 'TheMaster') {
                alert('Welcome!');
        } else if (password == '') {
                alert('Canceled');
        } else {
                alert('Wrong password');
        }
} else if (login == '') {
        alert('Canceled');
} else {
        alert('I don\'t know you');
}
