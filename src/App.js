import React, { useEffect, useState } from 'react';
import brain from 'brain.js'
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2'

// BRAIN.JS test
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
let trainingData = [
  { input: [0, 0, 1, 1], output: [1] }
]
// trainingData.push({input: arr, output: result})
net.train(trainingData)
let hmm = (net.run([0, 0, 1, 1]))
let hmm2 = Math.floor(hmm[0] * 100)
// BRAIN.JS test

function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  // GRAPH.JS test
  const [doughtnutData, setDoughnutData] = useState({})
  const doughnut = () => {
    setDoughnutData({
      // labels: ['Sleep Score', ''],
      datasets: [
        {
          label: 'Sleep score',
          data: [hmm2, 100 - hmm2],
          backgroundColor: ['#56CCF2', 'transparent']
        }
      ],
    })
  }
  const options = {
    tooltips: {
      enabled: false
    }
  }

  useEffect(() => {
    doughnut()
  }, [])

  return (
    <>
      {/* <div className='register'>
        <input type='text' id='emailR'></input>
        <label>Email</label>
        <input type='text' id='passwordR'></input>
        <label>Password</label>
        <button type='submit'>Register</button>
      </div>
      <div className='login'>
        <input type='text' id='emailL'></input>
        <label>Email</label>
        <input type='text' id='passwordL'></input>
        <label>Password</label>
        <button type='submit'>Login</button>
      </div> */}
      <div className='container'>
        <div className='number'>
          <p id='number'>{hmm2}</p>
          <Doughnut data={doughtnutData} options={options} className='doughnut' />
        </div>
        <div className='test'>
          <Button variant='primary' size='lg' className='shadow'>Test</Button>{' '}
        </div>
      </div>
    </>
  );
}

export default App;
