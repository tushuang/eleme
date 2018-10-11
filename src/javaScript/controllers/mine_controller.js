const mine_template = require('../views/mine.html');

const render = () => {
    $('#content').html(mine_template);
}

module.exports = {
    render
}