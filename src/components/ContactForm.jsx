import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.comments) {
      errors.comments = 'Required';
    }
    return errors;
};


export const ContactForm = () => {

    const { t } = useTranslation('global');
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState(t('contact.buttonSend'));

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comments: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setButtonText(t('contact.buttonSending'))
            setLoading(true);

            emailjs.sendForm('service_x1gyz7l', 'template_awdeo7v', form.current, 'np3kA5E2B9YUkunaO')
                .then((result) => {
                    resetForm();
                    setButtonText(t('contact.buttonOk'))
                    setTimeout(() => {
                        setButtonText(t('contact.buttonSend'));
                        setLoading(false);
                    }, 3000);


                }, (error) => {
                    setButtonText(t('contact.buttonError'));
                    setTimeout(() => {
                        setButtonText(t('contact.buttonSend'));
                        setLoading(false);
                    }, 3000);

                });
        },
    });

  return (
    <form ref={form} className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-1/2 px-3 ">
                <input className="appearance-none block w-full bg-background text-text border border-text rounded py-3 px-4 mb-2 leading-tight" 
                    id="name" 
                    name="name"
                    type="text" 
                    placeholder={t('contact.placeHolderName')}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <p className="text-[#ff3131] text-xs italic mb-2">{formik.errors.name}</p> : null}
                
            </div>
            <div className="w-full md:w-1/2 px-3 mb-1">
                <input className="appearance-none block w-full bg-background text-text border rounded py-3 px-4 mb-2 leading-tight" 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder={t('contact.placeHolderEmail')}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                 {formik.errors.email ? <p className="text-[#ff3131] text-xs italic mb-2">{formik.errors.email}</p> : null}
            </div>
            <div className="w-full px-3 mb-1">
                <textarea className="appearance-none block w-full bg-background text-text border rounded py-3 px-4 mb-1 leading-tight" 
                    id="comments"  
                    name="comments"
                    type="text" 
                    rows={5}
                    placeholder={t('contact.placeHolderComments')}
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                />
                 {formik.errors.comments ? <p className="text-[#ff3131] text-xs italic mb-2">{formik.errors.comments}</p> : null}
            </div>
        </div>
    
        <button type="submit" className={
            `${ buttonText === 'SEND' || 'SENDING...' ? 'bg-primary' : buttonText === 'OK' ? 'bg-accent' : 'bg-[#ff3131]'}
            text-background w-full hover:opacity-90 py-2 rounded-md transition-all duration-150 disabled:opacity-50`
            } disabled={ loading ? true : false }>{buttonText}</button>
    </form>
)
}
