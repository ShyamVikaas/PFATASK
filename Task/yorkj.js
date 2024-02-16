    function display(event) {
      event.preventDefault();
      var sname = document.getElementById("sname").value;
      var phno = document.getElementById("phno").value;
      var aid = document.getElementById("aid").value;
      var admissiondate = document.getElementById("admissiondate").value;
      var deptname = document.getElementById("deptname").value;
      var hostelPreference = document.getElementById("yes").value;
      var firstGraduate = document.querySelector(
        'input[name="firstGraduate"]:checked'
      ).value;

      var admissionFee, tuitionFee, hostelFee;
      var totalFee;

      switch (deptname) {
        case "EEE":
          admissionFee = 30000;
          tuitionFee = 45000;
          hostelFee = 75000;
          break;
        case "ECE":
          admissionFee = 30000;
          tuitionFee = 50000;
          hostelFee = 75000;
          break;
        case "CSE":
          admissionFee = 30000;
          tuitionFee = 45000;
          hostelFee = 75000;
          break;
        case "MECH":
          admissionFee = 30000;
          tuitionFee = 55000;
          hostelFee = 75000;
          break;
        case "CIVIL":
          admissionFee = 30000;
          tuitionFee = 50000;
          hostelFee = 75000;
          break;
        case "IT":
          admissionFee = 30000;
          tuitionFee = 45000;
          hostelFee = 75000;
          break;
      }

      totalFee = admissionFee + tuitionFee;
      if (hostelPreference === "Yes") {
        totalFee += hostelFee;
      }

      if (firstGraduate) {
        totalFee -= 20000;
      }

      // var result = `Hi ${sname}, Your Admission Fee is Rs.${admissionFee} Tuition Fee is Rs.${tuitionFee} Hostel Fee is Rs.${hostelFee} Total College Fee is RS.${totalFee}`;
      document.getElementById("result").innerHTML = `<ul>
        <li>Hi ${sname}</li>
        <li>Your Admission Fee is Rs.${admissionFee}</li>
        <li>Tution Fee is Rs.${tuitionFee}</li>
        <li>Hostel fee is Rs.${hostelFee}</li>
        <li>Total College Fee is Rs.${totalFee}</li>
        </ul>`;
      return false;
    }