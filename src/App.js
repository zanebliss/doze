import React, { useEffect, useState } from 'react';
import brain from 'brain.js'
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2'

// Data set
// const arr = [0,0,1,1]
// const result = [0]
// New NeuralNetwork
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
let trainingData = [
  { input: [0,0,1,1], output: [1]}
]
// trainingData.push({input: arr, output: result})
net.train(trainingData)
let hmm = (net.run([0,0,1,1]))
let hmm2 = Math.floor(hmm[0] * 100)


function App() {
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
      <div className='container'>
        <div className='number'>
          <p id='number'>{hmm2}</p>
        <Doughnut data={doughtnutData} options={options} className='doughnut'/>
        </div>
        <div className='test'>
          <Button variant='primary' size='lg' className='shadow'>Test</Button>{' '}
        </div>
      </div>
    </>
  );
}

export default App;
