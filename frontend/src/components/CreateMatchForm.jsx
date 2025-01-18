import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateMatchForm = () => {
    const [teams, setTeams] = useState([]); 
    const [match, setMatch] = useState({
        name: '',
        date: '',
        teamAId: '',
        teamBId: '',
    });

    // Fetch all teams from the database
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8080/team');
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
        fetchTeams();
    }, [match]);

    // To handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMatch({ ...match, [name]: value });
    };

    // To handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: match.name,
                date: match.date,
                teamAId : parseInt(match.teamAId, 10),
                teamBId: parseInt(match.teamBId, 10)
            };
            // Send POST request to create a match
            // console.log(payload, "payload")
            const response = await axios.post('http://localhost:8080/match', payload);
            console.log('Match created successfully:', response.data);
            alert('Match created successfully!');
    
            setMatch({ name: '', date: '', teamAId: '', teamBId: '' });
        } catch (error) {
            console.error('Error creating match:', error);
            alert('Failed to create match. Please try again.');
        }
    };

    return (
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Create New Match</h2>
    <form onSubmit={handleSubmit}>
        {/* Match Name Input */}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Match Name</label>
            <input
                type="text"
                name="name"
                value={match.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
            />
        </div>

        {/* Match Date Input */}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Match Date</label>
            <input
                type="date"
                name="date"
                value={match.date}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
            />
        </div>

        {/* Team A Dropdown */}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Team A</label>
            <select
                name="teamAId"
                value={match.teamAId}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
            >
                <option value="">Select Team A</option>
                {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
        </div>

        {/* Team B Dropdown */}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Team B</label>
            <select
                name="teamBId"
                value={match.teamBId}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
            >
                <option value="">Select Team B</option>
                {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
            Create Match
        </button>
    </form>
</div>
    );
};

export default CreateMatchForm;