const tellMeSomething = async () => {
    let response = await fetch('./tell-me-something.php');
    if (response.ok) {
        response = await response.json();
        console.log(response);
    }
}
tellMeSomething();

