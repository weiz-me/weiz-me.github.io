
    var password;
    var pass1="06212022";
    password=prompt('Please enter your password to view this page!');

    if (password==pass1)
      alert('Password Correct! Click OK to enter!');
    else
       {
      alert('Wrong Password, redirect to Home Page');
      window.location="http://weiz.me/HMC";
        }
