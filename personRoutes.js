const express = require('express');
const router = express.Router();
const Person = require('./person')


router.get('/', function (req, res) {
    res.send('Hello')
  })

router.get('/hotel', function (req, res) {
      res.send('welcome to my hotel')
    })
    
router.post('/hotel', async function(req, res){
    try{
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }

  })

router.get('/hotel/:workType',async(req,res)=>{
    try{
    const workType = req.params.workType;
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
         const response = await Person.find({work: workType});
         console.log('response fetched');
         res.status(200).json(response);
      }
      else{
        res.status(200).json({error: 'Invalid work type'});
      }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
  })
  router.put('/hotel/:id',async(req,res)=>{
        try{
            const personid = req.params.id;
            const updatedPersonData = req.body;
            const response = await Person.findByIdAndUpdate(personid,updatedPersonData,{
                new: true,
                runValidators: true,
            })
            console.log('data updated');
            res.status(200).json(response);

            if(!response){
                res.status(404).json({error: 'Person not found'});
            }

        }
        catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
        }
  })

  module.exports = router;