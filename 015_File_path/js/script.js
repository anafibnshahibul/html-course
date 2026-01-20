 // This script "reads" the file when you select it
        document.getElementById('myFile').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('fileContent').textContent = e.target.result;
            };

            if (file) {
                reader.readAsText(file);
            }
        });