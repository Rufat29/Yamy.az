function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("profile-img");
      preview.src = src;
      preview.style.display = "block";
    } 
  }