// 
        const form = document.getElementById('register');
        const btn = document.getElementById('btn');

        form.addEventListener('submit',function(event){

            event.preventDefault();
        const name =document.getElementById('name').value;
        const email = document.getElementById('email').value;
     
        const result = document.getElementById('result');

         result.style.display = "block";

        result.innerHTML = `
        <h3>Student Details</h3>
        <p>Name : ${name}</p>
        <p>Email : ${email}</p>
         `

             btn.style.backgroundColor = "green";

            // Change button text
            btn.innerHTML = "Submitted ✔";

            // Disable button
            btn.disabled = true;

            form.reset();

});