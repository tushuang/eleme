const find_template = require('../views/find.html');

const render = () => {
    $('#content').html(find_template);
}

module.exports = {
    render
}