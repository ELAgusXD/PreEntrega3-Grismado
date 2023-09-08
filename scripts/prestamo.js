const gen_table = () => {
  document.getElementById("tab").innerHTML = "";
  const capital = Number(document.getElementById("capital").value);
  const capital2 = Number(document.getElementById("cuota").value);
  const capital3 = Number(document.getElementById("interes").value);

  console.log("Capital:", capital);
  console.log("Cuota:", capital2);
  console.log("Interés:", capital3);

  if (capital > 0) {
      const tableRows = [];
      const data = []; // Array para almacenar objetos

      let totalDeInteres = 0;

      for (let i = 1; i <= capital2; i++) {
          const cuota = capital / capital2;
          const decimal1 = cuota.toFixed(2);
          const interes2 = (capital * capital3) / 100 / capital2;
          const decimal2 = interes2.toFixed(2);
          const total = cuota + interes2;
          const decimal3 = total.toFixed(2);

          console.log(`Iteración ${i}: Cuota=${decimal1}, Interés=${decimal2}, Total=${decimal3}`);

          tableRows.push(`
              <tr>
                  <td>${i}</td>
                  <td>${decimal1}</td>
                  <td>${decimal2}</td>
                  <td>${decimal3}</td>
              </tr>
          `);

          // Agrega objetos al array data
          data.push({
              Iteracion: i,
              Cuota: decimal1,
              Interes: decimal2,
              Total: decimal3
          });

          totalDeInteres += interes2;
      }

      const capital1 = capital.toFixed(2);
      const decimal4 = totalDeInteres.toFixed(2);
      const totalAPagar = (capital / capital2 + totalDeInteres) * capital2;
      const decimal5 = totalAPagar.toFixed(2);

      console.log("Total de Interés:", decimal4);
      console.log("Total a Pagar:", decimal5);

      const jsonData = JSON.stringify(data);

      localStorage.setItem('tablaData', jsonData);

      document.getElementById("tab").innerHTML = tableRows.join("");

      document.getElementById("total1").innerHTML = capital1;
      document.getElementById("total2").innerHTML = decimal4;
      document.getElementById("total3").innerHTML = decimal5;

      const errorDiv = document.getElementById("errorMensaje");
      errorDiv.textContent = "";
  } else {
    const errorDiv = document.getElementById("errorMensaje");
    errorDiv.textContent = "Falta ingresar un número";
}
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("capital").addEventListener("input", gen_table);
  document.getElementById("cuota").addEventListener("input", gen_table);
  document.getElementById("interes").addEventListener("input", gen_table);
  document.getElementById("btnCalcular").addEventListener("click", gen_table);
});

