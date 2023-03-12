import db from '../models/index';

let getHomepage = async (req, res) => {
    try {    
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
    }
}
let About = (req, res) => {
    return res.render('about.ejs'); 
}

module.exports = {
    getHomepage: getHomepage,
    About: About,
}