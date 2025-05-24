<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>Registro de Pilotos de Mototaxis</title>
</head>
<body>
<h2>Registro de Pilotos de Mototaxis</h2>
<form id="pilotoForm">
  <label for="nombre">Nombre:</label><br>
  <input type="text" id="nombre" name="nombre" required><br><br>
  
  <label for="telefono">Teléfono:</label><br>
  <input type="tel" id="telefono" name="telefono" required><br><br>
  
  <label for="vehiculo">Número de Vehículo:</label><br>
  <input type="text" id="vehiculo" name="vehiculo" required><br><br>
  
  <button type="submit">Guardar</button>
</form>

<script>
  document.getElementById('pilotoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const vehiculo = document.getElementById('vehiculo').value;
    
    // Aquí deberías enviar estos datos a tu backend para guardarlos en la base de datos
    // Por ejemplo, usando fetch() para hacer una solicitud POST a tu servidor
    
    fetch('/guardarPiloto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, telefono, vehiculo })
    })
    .then(response => response.json())
    .then(data => {
      alert('Piloto guardado exitosamente!');
      document.getElementById('pilotoForm').reset();
    })
    .catch(error => {
      alert('Hubo un error al guardar los datos.');
      console.error('Error:', error);
    });
  });
</script>
</body>
</html>