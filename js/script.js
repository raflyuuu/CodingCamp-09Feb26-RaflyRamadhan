// Set default name
document.addEventListener("DOMContentLoaded", function(){

    const name = prompt("Masukkan Nama Anda:");
    if(name){
        document.getElementById("userName").innerText = name;
    }

    const form = document.getElementById("messageForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const tanggal = document.getElementById("tanggal").value;
            const pesan = document.getElementById("pesan").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if(nama === "" || tanggal === "" || !gender || pesan === ""){
                alert("Semua field harus diisi!");
                return;
            }

            const output = `
                Nama: ${nama} <br>
                Tanggal Lahir: ${tanggal} <br>
                Jenis Kelamin: ${gender.value} <br>
                Pesan: ${pesan}
            `;

            document.getElementById("resultOutput").innerHTML = output;
        });
    }

});
