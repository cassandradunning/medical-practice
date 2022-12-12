/* BOOK 2: Group Project: TrustPoint Medical Practice
    TrustPoint medical practice administrators want us to create a program
    that takes an array of doctors, and an array of patients, and assign
    patients to doctors if the patient `illness` property matches the 
    `specialty` property of the doctor.

    This object represents an appointment that the administrator must make
    for the patient.

    Once all appointment objects are created, display all appointments,
    organized by doctor.

    * Define a function whose responsibility is to create an appointment
        object. It should have the name of the doctor and the name of the
        patient as properties.
    * Define a function to display all appointments, organized by doctor


    ************************************
    ADVANCED STRETCH GOALS
    ************************************
    1. If there are no appoinmtments for a doctor, display a message, 
        for each doctor, that they have the week off.
    2. What if a doctor has 2+ specialties?
    3. What if both a male and female doctor have the same specialty, and
        the patient has a property that indicates their preference?
    4. What if the string values for the specialities is stored in its
        own array?
*/

const doctors = [
    { id: 1, name: "Cassie", Specialty: "TMJ" },
    { id: 2, name: "Nelson", Specialty: "backward hands" },
    { id: 3, name: "Daniel", Specialty: "Allergies" }
  ];
  
  const patients = [
    {
      id: 1,
      name: "Fred Jones",
      illness: "backward hands"
    },
    {
      id: 2,
      name: "Jessica James",
      illness: "TMJ"
    },
    {
      id: 3,
      name: "Little Man",
      illness: "Allergies"
    },
    {
      id: 4,
      name: "Bill Jones",
      illness: "Allergies"
    },
    { id: 5, name: "Bob Evans", illness: "TMJ" },
    { id: 6, name: "Mr.Krabs", illness: "backward hands" },
    { id: 7, name: "Big Shot", illness: "backward hands" },
    { id: 8, name: "Lebron James", illness: "Allergies" },
    { id: 9, name: "Mr. Bubz", illness: "Allergies" },
    { id: 10, name: "Bill Netflix", illness: "TMJ" }
  ];
  // This array will be filled by your function
  const appointments = [];
  
  /*                                    
      Write your logic for identifying the match between
      doctors and patients here
  */
  
  /* 
      Define your functions here
      1.) accept a patient object as an argument
      2.) iterate through the doctor array
      3.) if patients illness is the same as current Dr. specialty 
          4.)  create a new object with patient name, doctor name, and illness
          5.)  push appointment object to appointment array
  */
  const makeAppt = (patient) => {
    for (const doctor of doctors) {
      if (patient.illness === doctor.Specialty) {
        const patientAppt = {
          patientName: patient.name,
          doctorName: doctor.name,
          illness: patient.illness
        };
        appointments.push(patientAppt);
      }
    }
  };
  
  // 1.) Iterate through the patient array
  // 2.) Invoke makeAppt and pass current patient as argument
  
  for (const patient of patients) {
    makeAppt(patient);
  }
  
  console.log("Doctors", doctors);
  console.log("Patients", patients);
  console.log("Appointments", appointments);
  
  /* 
      Once all appointment objects are created, display all appointments,
      organized by doctor.
  
      ex. 
      Cassie:
        Jessica James
        Bob Evans
        Bill Netflix
      
      Nelson: 
        Fred Jones
        Mr. Krabs
        Big Shot
  
      Daniel:
        Little Man
        Dill Jones
        Lebron James
        Mr. Bubz
  
  
      ALGORITHM:
      1.) iterate the doctor array - for each doctor:
        2. ) console.log doctor's name
        3. ) iterate the appointments array - for each appointment
          4. ) check if doctor name matches appointment dr name. if so -
            5. ) console.log appointment's patient
   
  
  */
  for (const doctor of doctors) {
    console.log(doctor.name);
    for (const appointment of appointments) {
      if (appointment.doctorName === doctor.name) {
        console.log(appointment.patientName);
      }
    }
  }
  