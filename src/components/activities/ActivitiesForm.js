import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager'

const ActivitiesForm = props => {
    let entry = props.entry
    const size = 'lg'
    const onlabel = 'Yes'
    const offlabel = 'No'

    const createNewEntry = () => {
        APIManager.post('entries', entry).then(() => {
            props.setCurrentEntry()
            props.handleClose()
            props.setIsNewUser(false)
        })
    }

    const editEntry = () => {
        APIManager.edit('entries', entry).then(() => {
            props.setCurrentEntry()
            props.handleClose()
        })
    }

    const handleSubmit = () => {
        if (props.isNewEntry) {
            createNewEntry()
        } else {
            editEntry()
        }
    }

    useEffect(() => {
        props.setCurrentEntry()
    }, [])

    return (
        <>
            <Form>
                <Form.Group>
                    <div className='sliders'>
                        <Form.Label>{props.preferences[0]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor1))}
                            onChange={() => { entry.factor1 = +!entry.factor1 }}
                        />
                        <Form.Label>{props.preferences[1]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor2))}
                            onChange={() => { entry.factor2 = +!entry.factor2 }}
                        />
                        <Form.Label>{props.preferences[2]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor3))}
                            onChange={() => { entry.factor3 = +!entry.factor3 }}
                        />
                        <Form.Label>{props.preferences[3]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor4))}
                            onChange={() => { entry.factor4 = +!entry.factor4 }}
                        />
                        <Form.Label>{props.preferences[4]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor5))}
                            onChange={() => { entry.factor5 = +!entry.factor5 }}
                        />
                        <Form.Label>{props.preferences[5]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor6))}
                            onChange={() => { entry.factor6 = +!entry.factor6 }}
                        />
                        <Form.Label>{props.preferences[6]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor7))}
                            onChange={() => { entry.factor7 = +!entry.factor7 }}
                        />
                        <Form.Label>{props.preferences[7]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(entry.factor8))}
                            onChange={() => { entry.factor8 = +!entry.factor8 }}
                        />
                        <Button onClick={() => {handleSubmit()}}>Next</Button>
                        <Button onClick={props.handleClose} variant='secondary'>Cancel</Button>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}

export default ActivitiesForm