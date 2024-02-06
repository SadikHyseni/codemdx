
document.addEventListener("DOMContentLoaded", function () {

  let overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  overlay.style.display = "block";


  // login container 
  let loginContainerDiv = document.createElement("div");
  loginContainerDiv.className = "container login";
  loginContainerDiv.textContent = "Login";
  loginContainerDiv.style.color = "white";
  loginContainerDiv.classList.add("login-text");
  //register container
  let RegisterContainerDiv = document.createElement("div");
  RegisterContainerDiv.className = "container register";
  RegisterContainerDiv.textContent = "Register";
  RegisterContainerDiv.style.color = "white";
  RegisterContainerDiv.classList.add("register-text");

  //login button
  let buttonLogin = document.createElement("button");
  buttonLogin.className = "button-login";
  buttonLogin.textContent = "Login";
  //event for login button
  buttonLogin.addEventListener("click", function () {
    overlay.style.display = "none";
    document.body.classList.remove("transparent-background");
    loginContainerDiv.style.display = "none"; // Hide the login container
  });

  //register button
  let buttonRegister = document.createElement("button");
  buttonRegister.className = "button-register";
  buttonRegister.textContent = "Register";
  //event for register button
  buttonRegister.addEventListener("click", function () {
    overlay.style.display = "none";
    document.body.classList.remove("transparent-background");
    RegisterContainerDiv.style.display = "none"; // Hide the register container
  });

  //elements for login and register containers
  Loginusername = document.createElement("input");
  Loginusername.type = "text";
  Loginusername.placeholder = "Username";
  Loginusername.id = "username";
  Loginusername.className = "form-control";
  Loginusername.required = true;

  Loginpassword = document.createElement("input");
  Loginpassword.type = "password";
  Loginpassword.placeholder = "Password";
  Loginpassword.id = "password";
  Loginpassword.className = "form-control";
  Loginpassword.required = true;

  RegisterName = document.createElement("input");
  RegisterName.type = "text";
  RegisterName.placeholder = "Name";
  RegisterName.id = "name";
  RegisterName.className = "form-control";
  RegisterName.required = true;

  Registerusername = document.createElement("input");
  Registerusername.type = "text";
  Registerusername.placeholder = "Username";
  Registerusername.id = "username";
  Registerusername.className = "form-control";
  Registerusername.required = true;

  Registerpassword = document.createElement("input");
  Registerpassword.type = "password";
  Registerpassword.placeholder = "Password";
  Registerpassword.id = "password";
  Registerpassword.className = "form-control";
  Registerpassword.required = true;

  RegisterConfirmPassword = document.createElement("input");
  RegisterConfirmPassword.type = "password";
  RegisterConfirmPassword.placeholder = "Password Confirmation";
  RegisterConfirmPassword.id = "password";
  RegisterConfirmPassword.className = "form-control";
  RegisterConfirmPassword.required = true;

  RegisterEmail = document.createElement("input");
  RegisterEmail.type = "email";
  RegisterEmail.placeholder = "Email";
  RegisterEmail.id = "email";
  RegisterEmail.className = "form-control";
  RegisterEmail.required = true;

  RegisterLink = document.createElement("a");
  RegisterLink.textContent = "Register?";
  RegisterLink.className = "register-link";
  //event for register link
  RegisterLink.addEventListener("click", function () {
    loginContainerDiv.style.display = "none"; // Hide the login container
    RegisterContainerDiv.style.display = "block"; // Show the register container
  });

  LoginLink = document.createElement("a");
  LoginLink.textContent = "Already a member?";
  LoginLink.style.color = "white";
  LoginLink.className = "login-link";
  //event for login link
  LoginLink.addEventListener("click", function () {
    RegisterContainerDiv.style.display = "none"; // Show the register container
    loginContainerDiv.style.display = "block"; // Hide the login container
  });


  //hide register and display login container
  RegisterContainerDiv.style.display = "none";
  loginContainerDiv.style.display = "block";
  //include elements to the containers
  loginContainerDiv.appendChild(Loginusername);
  loginContainerDiv.appendChild(Loginpassword);
  loginContainerDiv.appendChild(RegisterLink);
  loginContainerDiv.appendChild(buttonLogin);
  RegisterContainerDiv.appendChild(RegisterName);
  RegisterContainerDiv.appendChild(RegisterEmail);
  RegisterContainerDiv.appendChild(Registerusername);
  RegisterContainerDiv.appendChild(Registerpassword);
  RegisterContainerDiv.appendChild(RegisterConfirmPassword);
  RegisterContainerDiv.appendChild(LoginLink);
  RegisterContainerDiv.appendChild(buttonRegister);
  document.body.appendChild(loginContainerDiv);
  document.body.appendChild(RegisterContainerDiv);




  // Create top container with navigation bar, logo, and search box
  let topContainer = document.createElement("div");
  topContainer.className = "top-container";

  //logo
  let logoImg = document.createElement("img");
  logoImg.src = "logo.png";
  logoImg.alt = "Logo";

  //search bar
  let searchBarDiv = document.createElement("div");
  searchBarDiv.className = "search-bar";
  let searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  let searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "Search";
  searchBarDiv.appendChild(searchInput);
  searchBarDiv.appendChild(searchButton);
  //inlcude logo and search bar to the top container
  topContainer.appendChild(logoImg);
  topContainer.appendChild(searchBarDiv);
  document.body.appendChild(topContainer);

  // Create container-fluid with rows and columns
  let containerFluid = document.createElement("div");
  containerFluid.className = "container-fluid";

  let rowDiv = document.createElement("div");
  rowDiv.className = "row";

  let col1Div = document.createElement("div");
  col1Div.className = "col-md-3 mx-auto";

  let firstContainerDiv = document.createElement("div");
  firstContainerDiv.className = "container first_container";

  let homeButton = createButton("Home", "btn btn-primary d-block mb-2");
  homeButton.addEventListener("click", function () {
    customContainerDiv.appendChild(post_container);
    customContainerDiv.removeChild(profilebackground);
    profilebackground.removeChild(profilepicture);
    customContainerDiv.removeChild(profileusername);
    customContainerDiv.removeChild(Biocontainer);
    customContainerDiv.removeChild(horizontalRule);

  });

  let profileButton = createButton("Profile", "btn btn-primary d-block mb-2");


  profileButton.addEventListener("click", function () {
    customContainerDiv.removeChild(post_container);
    customContainerDiv.appendChild(profilebackground);
    let randomColor = getRandomColor();
    profilebackground.style.backgroundColor = randomColor;
    profilebackground.style.display = "block";
    profilebackground.appendChild(profilepicture);
    customContainerDiv.appendChild(profileusername);
    customContainerDiv.appendChild(Biocontainer);
    customContainerDiv.appendChild(horizontalRule);

  });

  let profilebackground = document.createElement("div");
  profilebackground.id = "profilebackground";
  profilebackground.alt = "profilebackground";

  let profilepicture = document.createElement("img");
  profilepicture.className = "profilepicture";
  profilepicture.src = "user icon.png";
  profilepicture.alt = "profilepicture";

  let profileusername = document.createElement("p");
  profileusername.className = "profileusername";
  profileusername.textContent = "username";
  profileusername.style.color = "white";
  profileusername.style.fontSize = "20px";


   let Biocontainer = document.createElement("div");
   Biocontainer.className = "Bio";

   let bioLabel = document.createElement("label");
   bioLabel.textContent = "Bio:";
   bioLabel.style.color = "white";

  // Create a div for displaying the user's bio
  let bioText = document.createElement("div");
  bioText.className = "bioText";
  bioText.textContent = "this is a bio";



  Biocontainer.appendChild(bioLabel);
  Biocontainer.appendChild(bioText);

  let horizontalRule = document.createElement('hr');
  horizontalRule.className = 'hr';


  function getRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }



  let logoutButton = createButton("Log out", "btn btn-primary d-block mb-2");
  logoutButton.addEventListener("click", function () {
    overlay.style.display = "block";
    loginContainerDiv.style.display = "block"; // Hide the login container
  });

  firstContainerDiv.appendChild(homeButton);
  firstContainerDiv.appendChild(profileButton);



  firstContainerDiv.appendChild(logoutButton);
  col1Div.appendChild(firstContainerDiv);

  let col2Div = document.createElement("div");
  col2Div.className = "col-md-6 mx-auto";

  let customContainerDiv = document.createElement("div");
  customContainerDiv.className = "container custom-container";


  let textField_post = document.createElement("textarea");
  textField_post.placeholder = "Tell us what you think...";
  textField_post.rows = 4; // Set the number of rows

  let post_container = document.createElement("div");
  post_container.className = "post_container";
  post_container.textContent = "username of loged user"
  post_container.style.color = "black";
  post_container.appendChild(textField_post);

  let post_button = document.createElement("button");
  post_button.textContent = "Post";
  post_button.style.color = "black";
  post_button.id = "post_button";
  post_container.appendChild(post_button);


  let fileButton = document.createElement("img");
  fileButton.src = "20-folder-png-image.png"; // Set the image source
  fileButton.id = "file_button";
  fileButton.alt = "Upload Image";

  fileButton.addEventListener("click", function () {
    include_file.click(); // Trigger the file input click when the button is clicked
  });

  // Create a file input element
  let include_file = document.createElement("input");
  include_file.type = "file";
  include_file.id = "include_file";
  include_file.style.display = "none";
  include_file.accept = "image/*, .png, .jpg, .jpeg, .gif, .pdf, .doc, .docx, .ppt, .pptx, .txt, .zip, .rar";
  include_file.multiple = true;

  // Append the file input to post_container
  post_container.appendChild(include_file);
  // Append the button to post_container
  post_container.appendChild(fileButton);

  // Add an event listener to handle file selection
  include_file.addEventListener("change", function () {
    // Handle the selected files here, for example, you can access them using include_file.files
    console.log("Selected files:", include_file.files);
  });



  customContainerDiv.appendChild(post_container);

  col2Div.appendChild(customContainerDiv);

  let col3Div = document.createElement("div");
  col3Div.className = "col-md-3 mx-auto";

  let secondContainerDiv = document.createElement("div");
  secondContainerDiv.className = "container second_container";

  let nestedContainerDiv = document.createElement("div");
  nestedContainerDiv.className = "nested-container";

  let h3Element = document.createElement("h3");
  h3Element.textContent = "You also might like...";

  nestedContainerDiv.appendChild(h3Element);
  secondContainerDiv.appendChild(nestedContainerDiv);
  col3Div.appendChild(secondContainerDiv);

  rowDiv.appendChild(col1Div);
  rowDiv.appendChild(col2Div);
  rowDiv.appendChild(col3Div);
  containerFluid.appendChild(rowDiv);

  document.body.appendChild(containerFluid);

  // Create footer
  let footerDiv = document.createElement("div");
  footerDiv.className = "footer";

  let githubLink = document.createElement("a");
  githubLink.href = "https://github.com/SadikHyseni"; // Replace with your GitHub profile URL
  githubLink.textContent = "© 2024 codemdx. all rights reserved";

  // Append the link to the footerDiv
  footerDiv.appendChild(githubLink);
  document.body.appendChild(footerDiv);



  // Helper function to create buttons
  function createButton(text, className) {
    let button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    return button;
  }
});
