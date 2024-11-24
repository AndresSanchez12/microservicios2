const DOMAIN_URL = "http://127.0.0.1:8000/api";
const estudianteForm = document.forms["estudianteForm"];
const tabla = document.getElementById("estudiantes");
let estudiantes = [];




const cargarEstudiantes = () => {
  fetch(`${DOMAIN_URL}/app/estudiantes`)
    .then((response) =>
      response.status == 404 ? alert("Error en el servicio") : response.json()
    )
    .then((body) => {
      estudiantes = body.data;
      const tbody = tabla.getElementsByTagName("tbody")[0];
      tbody.innerHTML = "";
      estudiantes.forEach(estudiante => {
        const tr = document.createElement('tr');

        const tdCodigo = document.createElement('td');
        const tdNombre = document.createElement('td');
        tdNombre.textContent = estudiante.nombres;
        const tdEmail = document.createElement('td');
        tdEmail.textContent = estudiante.email;

        tr.appendChild(tdCodigo);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tbody.appendChild(tr);
      });
    })
    .finally(() => console.log("Respuesta del servicio fin"));
};



cargarEstudiantes();

console.log(estudiantes);

contactoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${DOMAIN_URL}/app/estudiante`, {
    method: "post",
    body: JSON.stringify({
      codigo: estudianteForm["codigo"].value,
      nombre: estudianteForm["nombre"].value,
      email: estudianteForm["email"].value,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then(()=>{
    cargarEstudiantes();
  });

});
