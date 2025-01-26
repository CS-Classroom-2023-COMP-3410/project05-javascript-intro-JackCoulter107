const elements = [
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, group: "Nonmetals", position: { row: 1, col: 1 } },
    { name: "Helium", symbol: "He", atomicNumber: 2, group: "Noble Gases", position: { row: 1, col: 18 } },
    { name: "Lithium", symbol: "Li", atomicNumber: 3, group: "Alkali Metals", position: { row: 2, col: 1 } },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, group: "Alkaline Earth Metals", position: { row: 2, col: 2 } },
    { name: "Boron", symbol: "B", atomicNumber: 5, group: "Metalloids", position: { row: 2, col: 13 } },
    { name: "Carbon", symbol: "C", atomicNumber: 6, group: "Nonmetals", position: { row: 2, col: 14 } },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, group: "Nonmetals", position: { row: 2, col: 15 } },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, group: "Nonmetals", position: { row: 2, col: 16 } },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, group: "Halogens", position: { row: 2, col: 17 } },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, group: "Noble Gases", position: { row: 2, col: 18 } },
    { name: "Sodium", symbol: "Na", atomicNumber: 11, group: "Alkali Metals", position: { row: 3, col: 1 } },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, group: "Alkaline Earth Metals", position: { row: 3, col: 2 } },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, group: "Post-Transition Metals", position: { row: 3, col: 13 } },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, group: "Metalloids", position: { row: 3, col: 14 } },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, group: "Nonmetals", position: { row: 3, col: 15 } },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, group: "Nonmetals", position: { row: 3, col: 16 } },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, group: "Halogens", position: { row: 3, col: 17 } },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, group: "Noble Gases", position: { row: 3, col: 18 } },
    { name: "Potassium", symbol: "K", atomicNumber: 19, group: "Alkali Metals", position: { row: 4, col: 1 } },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, group: "Alkaline Earth Metals", position: { row: 4, col: 2 } },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, group: "Transition Metals", position: { row: 4, col: 3 } },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, group: "Transition Metals", position: { row: 4, col: 4 } },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, group: "Transition Metals", position: { row: 4, col: 5 } },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, group: "Transition Metals", position: { row: 4, col: 6 } },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, group: "Transition Metals", position: { row: 4, col: 7 } },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, group: "Transition Metals", position: { row: 4, col: 8 } },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, group: "Transition Metals", position: { row: 4, col: 9 } },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, group: "Transition Metals", position: { row: 4, col: 10 } },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, group: "Transition Metals", position: { row: 4, col: 11 } },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, group: "Transition Metals", position: { row: 4, col: 12 } },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, group: "Post-Transition Metals", position: { row: 4, col: 13 } },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, group: "Metalloids", position: { row: 4, col: 14 } },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, group: "Metalloids", position: { row: 4, col: 15 } },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, group: "Nonmetals", position: { row: 4, col: 16 } },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, group: "Halogens", position: { row: 4, col: 17 } },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, group: "Noble Gases", position: { row: 4, col: 18 } },
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, group: "Alkali Metals", position: { row: 5, col: 1 } },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, group: "Alkaline Earth Metals", position: { row: 5, col: 2 } },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, group: "Transition Metals", position: { row: 5, col: 3 } },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, group: "Transition Metals", position: { row: 5, col: 4 } },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, group: "Transition Metals", position: { row: 5, col: 5 } },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, group: "Transition Metals", position: { row: 5, col: 6 } },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, group: "Transition Metals", position: { row: 5, col: 7 } },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, group: "Transition Metals", position: { row: 5, col: 8 } },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, group: "Transition Metals", position: { row: 5, col: 9 } },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, group: "Transition Metals", position: { row: 5, col: 10 } },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, group: "Transition Metals", position: { row: 5, col: 11 } },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, group: "Transition Metals", position: { row: 5, col: 12 } },
    { name: "Indium", symbol: "In", atomicNumber: 49, group: "Post-Transition Metals", position: { row: 5, col: 13 } },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, group: "Post-Transition Metals", position: { row: 5, col: 14 } },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, group: "Metalloids", position: { row: 5, col: 15 } },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, group: "Metalloids", position: { row: 5, col: 16 } },
    { name: "Iodine", symbol: "I", atomicNumber: 53, group: "Halogens", position: { row: 5, col: 17 } },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, group: "Noble Gases", position: { row: 5, col: 18 } },
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, group: "Alkali Metals", position: { row: 6, col: 1 } },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, group: "Alkaline Earth Metals", position: { row: 6, col: 2 } },
    { name: "Lanthanum", symbol: "La", atomicNumber: 57, group: "Lanthanides", position: { row: 9, col: 4 } },
    { name: "Cerium", symbol: "Ce", atomicNumber: 58, group: "Lanthanides", position: { row: 9, col: 5 } },
    { name: "Praseodymium", symbol: "Pr", atomicNumber: 59, group: "Lanthanides", position: { row: 9, col: 6 } },
    { name: "Neodymium", symbol: "Nd", atomicNumber: 60, group: "Lanthanides", position: { row: 9, col: 7 } },
    { name: "Promethium", symbol: "Pm", atomicNumber: 61, group: "Lanthanides", position: { row: 9, col: 8 } },
    { name: "Samarium", symbol: "Sm", atomicNumber: 62, group: "Lanthanides", position: { row: 9, col: 9 } },
    { name: "Europium", symbol: "Eu", atomicNumber: 63, group: "Lanthanides", position: { row: 9, col: 10 } },
    { name: "Gadolinium", symbol: "Gd", atomicNumber: 64, group: "Lanthanides", position: { row: 9, col: 11 } },
    { name: "Terbium", symbol: "Tb", atomicNumber: 65, group: "Lanthanides", position: { row: 9, col: 12 } },
    { name: "Dysprosium", symbol: "Dy", atomicNumber: 66, group: "Lanthanides", position: { row: 9, col: 13 } },
    { name: "Holmium", symbol: "Ho", atomicNumber: 67, group: "Lanthanides", position: { row: 9, col: 14 } },
    { name: "Erbium", symbol: "Er", atomicNumber: 68, group: "Lanthanides", position: { row: 9, col: 15 } },
    { name: "Thulium", symbol: "Tm", atomicNumber: 69, group: "Lanthanides", position: { row: 9, col: 16 } },
    { name: "Ytterbium", symbol: "Yb", atomicNumber: 70, group: "Lanthanides", position: { row: 9, col: 17 } },
    { name: "Lutetium", symbol: "Lu", atomicNumber: 71, group: "Lanthanides", position: { row: 9, col: 18 } },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, group: "Transition Metals", position: { row: 6, col: 4 } },
    { name: "Tantalum", symbol: "Ta", atomicNumber: 73, group: "Transition Metals", position: { row: 6, col: 5 } },
    { name: "Tungsten", symbol: "W", atomicNumber: 74, group: "Transition Metals", position: { row: 6, col: 6 } },
    { name: "Rhenium", symbol: "Re", atomicNumber: 75, group: "Transition Metals", position: { row: 6, col: 7 } },
    { name: "Osmium", symbol: "Os", atomicNumber: 76, group: "Transition Metals", position: { row: 6, col: 8 } },
    { name: "Iridium", symbol: "Ir", atomicNumber: 77, group: "Transition Metals", position: { row: 6, col: 9 } },
    { name: "Platinum", symbol: "Pt", atomicNumber: 78, group: "Transition Metals", position: { row: 6, col: 10 } },
    { name: "Gold", symbol: "Au", atomicNumber: 79, group: "Transition Metals", position: { row: 6, col: 11 } },
    { name: "Mercury", symbol: "Hg", atomicNumber: 80, group: "Transition Metals", position: { row: 6, col: 12 } },
    { name: "Thallium", symbol: "Tl", atomicNumber: 81, group: "Post-Transition Metals", position: { row: 6, col: 13 } },
    { name: "Lead", symbol: "Pb", atomicNumber: 82, group: "Post-Transition Metals", position: { row: 6, col: 14 } },
    { name: "Bismuth", symbol: "Bi", atomicNumber: 83, group: "Post-Transition Metals", position: { row: 6, col: 15 } },
    { name: "Polonium", symbol: "Po", atomicNumber: 84, group: "Metalloids", position: { row: 6, col: 16 } },
    { name: "Astatine", symbol: "At", atomicNumber: 85, group: "Halogens", position: { row: 6, col: 17 } },
    { name: "Radon", symbol: "Rn", atomicNumber: 86, group: "Noble Gases", position: { row: 6, col: 18 } },
    { name: "Francium", symbol: "Fr", atomicNumber: 87, group: "Alkali Metals", position: { row: 7, col: 1 } },
    { name: "Radium", symbol: "Ra", atomicNumber: 88, group: "Alkaline Earth Metals", position: { row: 7, col: 2 } },
    { name: "Actinium", symbol: "Ac", atomicNumber: 89, group: "Actinides", position: { row: 10, col: 4 } },
    { name: "Thorium", symbol: "Th", atomicNumber: 90, group: "Actinides", position: { row: 10, col: 5 } },
    { name: "Protactinium", symbol: "Pa", atomicNumber: 91, group: "Actinides", position: { row: 10, col: 6 } },
    { name: "Uranium", symbol: "U", atomicNumber: 92, group: "Actinides", position: { row: 10, col: 7 } },
    { name: "Neptunium", symbol: "Np", atomicNumber: 93, group: "Actinides", position: { row: 10, col: 8 } },
    { name: "Plutonium", symbol: "Pu", atomicNumber: 94, group: "Actinides", position: { row: 10, col: 9 } },
    { name: "Americium", symbol: "Am", atomicNumber: 95, group: "Actinides", position: { row: 10, col: 10 } },
    { name: "Curium", symbol: "Cm", atomicNumber: 96, group: "Actinides", position: { row: 10, col: 11 } },
    { name: "Berkelium", symbol: "Bk", atomicNumber: 97, group: "Actinides", position: { row: 10, col: 12 } },
    { name: "Californium", symbol: "Cf", atomicNumber: 98, group: "Actinides", position: { row: 10, col: 13 } },
    { name: "Einsteinium", symbol: "Es", atomicNumber: 99, group: "Actinides", position: { row: 10, col: 14 } },
    { name: "Fermium", symbol: "Fm", atomicNumber: 100, group: "Actinides", position: { row: 10, col: 15 } },
    { name: "Mendelevium", symbol: "Md", atomicNumber: 101, group: "Actinides", position: { row: 10, col: 16 } },
    { name: "Nobelium", symbol: "No", atomicNumber: 102, group: "Actinides", position: { row: 10, col: 17 } },
    { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, group: "Actinides", position: { row: 10, col: 18 } },
    { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, group: "Transition Metals", position: { row: 7, col: 4 } },
    { name: "Dubnium", symbol: "Db", atomicNumber: 105, group: "Transition Metals", position: { row: 7, col: 5 } },
    { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, group: "Transition Metals", position: { row: 7, col: 6 } },
    { name: "Bohrium", symbol: "Bh", atomicNumber: 107, group: "Transition Metals", position: { row: 7, col: 7 } },
    { name: "Hassium", symbol: "Hs", atomicNumber: 108, group: "Transition Metals", position: { row: 7, col: 8 } },
    { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, group: "Transition Metals", position: { row: 7, col: 9 } },
    { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, group: "Transition Metals", position: { row: 7, col: 10 } },
    { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, group: "Transition Metals", position: { row: 7, col: 11 } },
    { name: "Copernicium", symbol: "Cn", atomicNumber: 112, group: "Transition Metals", position: { row: 7, col: 12 } },
    { name: "Nihonium", symbol: "Nh", atomicNumber: 113, group: "Post-Transition Metals", position: { row: 7, col: 13 } },
    { name: "Flerovium", symbol: "Fl", atomicNumber: 114, group: "Post-Transition Metals", position: { row: 7, col: 14 } },
    { name: "Moscovium", symbol: "Mc", atomicNumber: 115, group: "Post-Transition Metals", position: { row: 7, col: 15 } },
    { name: "Livermorium", symbol: "Lv", atomicNumber: 116, group: "Post-Transition Metals", position: { row: 7, col: 16 } },
    { name: "Tennessine", symbol: "Ts", atomicNumber: 117, group: "Halogens", position: { row: 7, col: 17 } },
    { name: "Oganesson", symbol: "Og", atomicNumber: 118, group: "Noble Gases", position: { row: 7, col: 18 } }
  ];
  
  const tableContainer = document.getElementById("periodic-table");
  const searchBar = document.getElementById("search-bar");
  const elementInfo = document.getElementById("element-info");
  
  const nameField = document.getElementById("element-name");
  const symbolField = document.getElementById("element-symbol");
  const atomicNumberField = document.getElementById("element-atomic-number");
  const groupField = document.getElementById("element-group");
  
  // Render periodic table
  function renderTable() {
    tableContainer.innerHTML = "";
    elements.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.className = "element";
      elementDiv.dataset.name = element.name;
      elementDiv.dataset.symbol = element.symbol;
      elementDiv.dataset.atomicNumber = element.atomicNumber;
      elementDiv.dataset.group = element.group;
      elementDiv.textContent = element.symbol;
  
      elementDiv.style.gridColumnStart = element.position.col;
      elementDiv.style.gridRowStart = element.position.row;
  
      elementDiv.addEventListener("click", () => displayElementInfo(element));
  
      tableContainer.appendChild(elementDiv);
    });
  }
  
  // Display element information
  function displayElementInfo(element) {
    nameField.textContent = `Name: ${element.name}`;
    symbolField.textContent = `Symbol: ${element.symbol}`;
    atomicNumberField.textContent = `Atomic Number: ${element.atomicNumber}`;
    groupField.textContent = `Group: ${element.group}`;
  
    document.querySelectorAll(".element").forEach((el) => el.classList.remove("selected"));
    const selectedElement = [...document.querySelectorAll(".element")].find(
      (el) => el.dataset.symbol === element.symbol
    );
    if (selectedElement) selectedElement.classList.add("selected");
  }
  
  // Search functionality
  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".element").forEach((el) => {
      const matches =
        el.dataset.name.toLowerCase().includes(query) ||
        el.dataset.symbol.toLowerCase().includes(query) ||
        el.dataset.atomicNumber.toString() === query;
      el.style.display = matches ? "flex" : "none";
    });
  });
  
  // Initialize
  renderTable();
  