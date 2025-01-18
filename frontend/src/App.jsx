import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MatchTableWithDropdown from './components/MatchTableWithDropdown';
import TeamForm from './components/TeamForm';
import CreateMatchForm from './components/CreateMatchForm';

    const App = () => {
        const [matches, setMatches] = useState([]);
        const [teams, setTeams] = useState([]);

        useEffect(() => {
            fetchMatches();
        }, [matches]);

        const fetchMatches = async () => {
            try {
                const response = await axios.get('http://localhost:8080/match');
                console.log(response.data, "response data");
                setMatches(response.data);
            } catch (error) {
                console.error('Error fetching matches:', error);
            }
        };
        const handleAddTeam = (newTeam) => {
            setTeams([...teams, newTeam]);
        };

        return (
            
            <>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }} className="text-3xl font-bold text-gray-800 mb-6"> Football Match Stats
            </h1>
            <MatchTableWithDropdown matches={matches} />
            </div>
            <div className="w-full min-h-screen p-6 bg-gray-50">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                    <CreateMatchForm />
                </div>
                <div className="w-full">
                    <TeamForm onAddTeam={handleAddTeam} />
                </div>
            </div>
            </div>

            
        </>
        );
    };

    export default App;
