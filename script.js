document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // منع إرسال الفورم إذا كانت البيانات غير صحيحة

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const nationalId = document.getElementById("nationalId");

    let isValid = true;

    // تحقق من الاسم
    if (name.value.trim().length < 3) {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    // تحقق من البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    // تحقق من الرقم القومي
    if (nationalId.value.length !== 14 || isNaN(nationalId.value)) {
      document.getElementById("idError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("idError").style.display = "none";
    }

    if (isValid) {
      // إرسال البيانات إذا كانت صحيحة
      alert("Form submitted successfully!");
      // يمكنك إضافة كود لإرسال البيانات للسيرفر هنا
    }
  });
