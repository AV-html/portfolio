import React, {useCallback, useState} from 'react';

import contacts from './Contacts.module.css'
import styles from './../../../common/styles/container.module.css'
import blocks from './../../../common/styles/blocks.module.css'
import {Subheading} from '../../Subheading/Subheading';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {TextArea} from '../../TextArea/TextArea';

export function Contacts() {
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    if (company && email && tel) {
        disabledSubmit && setDisabledSubmit(false)
    } else {
        !disabledSubmit && setDisabledSubmit(true)
    }
    const onChangeCompany = useCallback((text: string) => {
        setCompany(text)
    }, [])
    const onChangeEmail = useCallback((text: string) => {
        setEmail(text)
    }, [])
    const onChangeTel = useCallback((text: string) => {
        setTel(text)
    }, [])


    return (
        <section id={'contacts'} className={contacts.contacts}>
            <div className={styles.box}>
                <Subheading className={contacts.subheading}>
                    Contacts
                </Subheading>
                <form action="#" className={contacts.form}>
                    <h3 className={`${blocks.title} ${contacts.title}`}>
                        Feedback form
                    </h3>

                    <div className={contacts.inputs}>
                        <Input
                            name={'company'}
                            placeholder={'Company name'}
                            onChangeText={onChangeCompany}
                            required
                            value={company}
                        />
                        <Input
                            name={'email'}
                            type={'email'}
                            placeholder={'E-mail'}
                            onChangeText={onChangeEmail}
                            required
                            value={email}
                        />
                        <Input
                            name={'tel'}
                            type={'tel'}
                            placeholder={'+7 (999) 999-99-99'}
                            onChangeText={onChangeTel}
                            required
                            value={tel}
                        />
                        <TextArea
                            placeholder={'You can ask a question here'}
                            className={contacts.textarea}
                        ></TextArea>
                    </div>

                    <Button type={'submit'} disabled={disabledSubmit}>
                        Submit an offer
                    </Button>
                </form>
            </div>
        </section>
    )
        ;
}