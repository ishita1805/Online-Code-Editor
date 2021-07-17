const stringSpliter = (data) => {
    const htmlStart = data.indexOf('<body>');
    const htmlEnd = data.indexOf('</body>');
    const html = data.substring(htmlStart+6,htmlEnd);
    const scriptStart = data.indexOf('<script>');
    const scriptEnd = data.indexOf('</script>');
    const script = data.substring(scriptStart+8,scriptEnd);
    const cssStart = data.indexOf('<style>');
    const cssEnd = data.indexOf('</style>');
    const css = data.substring(cssStart+7,cssEnd);
    return [html,css,script];
}
export default stringSpliter;