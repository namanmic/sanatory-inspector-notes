function showSection(sectionId) {
    // Hide all sections
    var s = document.querySelectorAll('.section');
    s.forEach(function (section) {
      section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
  }

  function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', event => {
      if (event.ctrlKey && (event.key === 'c' || event.key === 'u')) {
        event.preventDefault();
      }
    });