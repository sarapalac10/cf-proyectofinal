'use client'
import React, { useState } from 'react';
import styles from './styles.module.css';

const Voluntario = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        availability: '',
        skills: '',
        reason: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Volunteer form submitted:', formData);
        alert('¡Gracias por querer ser voluntario! Pronto nos pondremos en contacto.');
        setFormData({
            name: '',
            age: '',
            availability: '',
            skills: '',
            reason: '',
        });
    };

    return (
        <div className={styles.containerVoluntario}>
            <h1>Ser Voluntario</h1>
            <p>
                Únete a nuestra causa y haz la diferencia. Tu tiempo y esfuerzo pueden salvar
                vidas. Ser voluntario en Alegría Gatuna te permitirá marcar una diferencia
                real en la vida de muchos gatos que necesitan amor y cuidado.
            </p>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label>Edad:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label>Disponibilidad Horaria:</label>
                <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                />
                <label>Habilidades (opcional):</label>
                <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                />
                <label>Motivo para ser voluntario:</label>
                <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Voluntario;
