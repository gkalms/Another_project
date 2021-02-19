console.log("app is running");

$("#submit-tv-btn").on("click", () => {
    console.log("Submit tv button was clicked!");

    // Extract value from the input box for tv/text
    const inputText = $("#input-tv-box").val();
    console.log(inputText);

    // const imgTag = `<img id="walter-white" src=""></img>`;
    // console.log(imgTag);

    // Append input to element with id: answer-label
    $("#answer-label").append(inputText);

    // $("#walter-white").attr("src", inputText);
    // console.log($("#walter-white").attr("src"));
});

// $("#submit-url-btn").on("click", () => {
//     console.log("Submit url button was clicked!");

//     // Extract url from the input box for url input
//     const inputUrl = $("#input-url-box").val();
//     console.log(inputUrl);

//     // Construct the img tag
//     const imgTag = `<img id="img-from-url" src="${inputUrl}"></img>`;

//     // Append img tag to existing element in UI
//     $("#answer-label").append(imgTag);
// });