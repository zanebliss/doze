import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager'
import '../activities/ActivitiesForm.css'

const ActivitiesForm = props => {
    const size = 'lg'
    const onlabel = 'Yes'
    const offlabel = 'No'

    const handleSave = () => {
        if (props.isNewUser) {
            props.setIsNewUser(false)
            APIManager.post('entries', props.entry)
        } else {
            APIManager.edit('entries', props.latestEntry)
        }
    }

    useEffect(() => {
        console.log('Form useEffect')
    }, [])

    return (
        <>
            <Form>
                <Form.Group>
                    <div className='sliders'>
                        <Form.Label>{props.preferences[0]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor1))}
                            onChange={() => { props.latestEntry.factor1 = +!props.latestEntry.factor1 }}
                        />
                        <Form.Label>{props.preferences[1]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor2))}
                            onChange={() => { props.latestEntry.factor2 = +!props.latestEntry.factor2}}
                        />
                        <Form.Label>{props.preferences[2]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor3))}
                            onChange={() => { props.latestEntry.factor3 = +!props.latestEntry.factor3 }}
                        />
                        <Form.Label>{props.preferences[3]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor4))}
                            onChange={() => { props.latestEntry.factor4 = +!props.latestEntry.factor4 }}
                        />
                        <Form.Label>{props.preferences[4]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor5))}
                            onChange={() => { props.latestEntry.factor5 = +!props.latestEntry.factor5 }}
                        />
                        <Form.Label>{props.preferences[5]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor6))}
                            onChange={() => { props.latestEntry.factor6 = +!props.latestEntry.factor6 }}
                        />
                        <Form.Label>{props.preferences[6]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor7))}
                            onChange={() => { props.latestEntry.factor7 = +!props.latestEntry.factor7 }}
                        />
                        <Form.Label>{props.preferences[7]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.latestEntry.factor8))}
                            onChange={() => { props.latestEntry.factor8 = +!props.latestEntry.factor8 }}
                        />
                        <Button onClick={() => {
                            handleSave()
                            props.handleClose()
                        }}>Next</Button>
                        <Button onClick={props.handleClose} variant='secondary'>Cancel</Button>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}

export default ActivitiesForm