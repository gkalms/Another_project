console.log("app is running");

  // Construct the img tag
  

  // Append img tag to existing element in UI
  

  $('#submit-btn').on('click', () => {
    console.log('submit button was clicked');  
    console.log( $('#input-box').val() ); //.val captures input from text box
    const input = ( $('#input-box').val() );
    const imgTag = `<img id="img-from-url" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlayY8YQGMCnQQa3QGFBXCYymothbh8CG7kv1LveDWdYF6Q2ouYaXCMBfuC9pky4rA10J_PRs&usqp=CAc"></img>`;
    $("#answer-label").append(imgTag);
    $("#answer-label").append(input);
});

