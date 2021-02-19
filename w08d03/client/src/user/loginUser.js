const form = `
<form id="login-user">
    <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" placeholder="Please Enter Username" name="username">
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" placeholder="Please Enter Password" name="password">
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

`;

const loginUser = () => {
    $(document).on("submit", "#login-user", async (event) => {
        console.log("event", event);
        event.preventDefault();

        const formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        console.log("form data", formData);
        const response = await $.ajax({
            type: "POST",
            url: "/api/users/login",
            contentType: "application/json",
            data: JSON.stringify(formData),
        });
        console.log("response", response);
    });
    return form;
};

export default loginUser;
