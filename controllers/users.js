let usersData = [{
  id: 0,
  name: "Stevennius Chandra",
  email: "12345678"
},
  {
    id: 1,
    name: "John Doe",
    email: "abcdefghijk"
  }];

module.exports = {
  index: {
    
    get: (req, res) => {
      res.status(200).json({
        status: true,
        code: 200,
        method: req.method,
        data: usersData
      });
    },
    
    post: (req, res) => {
      usersData.push(req.body);
      res.status(200).json({
        status: true,
        code: 200,
        method: req.method,
        data: usersData
      });
    },
    
    patch: (req, res) => {
      res.send("Patch users");
    },
    
    delete: (req, res) => {

      usersData = usersData.filter(user => user.id != req.params.id);
      res.status(200).json({
        status: true,
        code: 200,
        method: req.method,
        data: usersData
      });
    },
    
    put: (req, res) => {

      usersData.map((el) => {

        if (el.id == req.params.id) {
          el.name = req.body.name;
          el.email = req.body.email;
          return el;
        }

      });

      res.status(200).json({
        status: true,
        code: 200,
        method: req.method,
        data: usersData
      });

    },
    
    getById: (req, res) => {
      
      usersData.forEach(user => {
        
        if (req.params.id == user.id) {
          res.status(200).json({
            status: true,
            code: 200,
            method: req.method,
            data: user
          });
        }
        
      });
      
    }
}

};