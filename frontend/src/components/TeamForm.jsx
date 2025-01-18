import React, { useState } from 'react';
import axios from 'axios';

const TeamForm = ({ onAddTeam }) => {
    const [teamA, setTeamA] = useState({
        name: '',
        goals: '',
        possession: '',
        passes: '',
        shots: '',
        shotsOnTarget: '',
        corners: '',
    });

    const [teamB, setTeamB] = useState({
        name: '',
        goals: '',
        possession: '',
        passes: '',
        shots: '',
        shotsOnTarget: '',
        corners: '',
    });

    const [isTeamA, setIsTeamA] = useState(true); // Track if user is entering Team A or Team B

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isTeamA) {
            setTeamA({ ...teamA, [name]: value });
        } else {
            setTeamB({ ...teamB, [name]: value });
        }
    };

    const handleNext = async (e) => {
        e.preventDefault();
        try {
            // Save Team A data to the database
            const response = await axios.post('http://localhost:8080/team/add', teamA);
            onAddTeam(response.data); // Notify parent component
            alert('Team A stats saved successfully!');
            setIsTeamA(false); // Switch to Team B form
        } catch (error) {
            console.error('Error saving Team A stats:', error);
            alert('Failed to save Team A stats.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save Team B data to the database
            const response = await axios.post('http://localhost:8080/team/add', teamB);
            onAddTeam(response.data); // Notify parent component
            alert('Team B stats saved successfully!');
            // Reset form and switch back to Team A
            setTeamA({ name: '', goals: '', possession: '', passes: '', shots: '', shotsOnTarget: '', corners: '' });
            setTeamB({ name: '', goals: '', possession: '', passes: '', shots: '', shotsOnTarget: '', corners: '' });
            setIsTeamA(true);
        } catch (error) {
            console.error('Error saving Team B stats:', error);
            alert('Failed to save Team B stats.');
        }
    };

    const currentTeam = isTeamA ? teamA : teamB;

    return (
        <form 
    onSubmit={isTeamA ? handleNext : handleSubmit} 
    className="w-full bg-gray-100 p-6 rounded-lg shadow-md"
>
    <h2 className="text-2xl font-bold mb-4">
        {isTeamA ? 'Enter Team A Statistics' : 'Enter Team B Statistics'}
    </h2>
    <div className="grid grid-cols-2 gap-4">
        {Object.keys(currentTeam).map((key) => (
            <div key={key} className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </label>
                <input
                    type="text"
                    name={key}
                    value={currentTeam[key]}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
        ))}
    </div>
    <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
        {isTeamA ? 'Next' : 'Submit'}
    </button>
</form>
    );
};

export default TeamForm;