import React, { useState } from "react";

const MatchTableWithDropdown = ({ matches }) => {
    const [selectedMatchId, setSelectedMatchId] = useState(matches[0]?.id || "");

    const handleDropdownChange = (event) => {
        setSelectedMatchId(event.target.value);
    };

    return (
        <div className="p-6 bg-gray-100 ">
    {/* Dropdown for selecting match ID */}
    <div className="mb-6">
        <label htmlFor="match-dropdown" className="mr-2 font-medium text-gray-700">Select Match Name:</label>
        <select
            id="match-dropdown"
            value={selectedMatchId}
            onChange={handleDropdownChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Select Match Name</option> 
            {matches.map((match) => (
                <option key={match.id} value={match.id} className="text-gray-700">
                 {match.name}
                </option>
            ))}
        </select>
    </div>

    {/* Table displaying data for the selected match */}
    <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goals</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Possession</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Passes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shots</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shots on Target</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corners</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
            {matches
                .filter((match) => match.id === Number(selectedMatchId))
                .map((match) => {
                    if (!match) {
                        return (
                            <tr key={match.id} className="bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{match.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{new Date(match.date).toDateString()}</td>
                                <td colSpan="7" className="px-6 py-4 text-sm text-gray-500">Match stats not available</td>
                            </tr>
                        );
                    }

                    const { team_A, team_B } = match.team_A && match.team_B ? match : { team_A: {}, team_B: {} };

                    return (
                        <React.Fragment key={match.id}>
                            {/* Row for Team A */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{new Date(match.date).toDateString()}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.goals}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.possession}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.passes}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.shots}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.shotsOnTarget}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_A.corners}</td>
                            </tr>
                            {/* Row for Team B */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{new Date(match.date).toDateString()}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.goals}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.possession}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.passes}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.shots}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.shotsOnTarget}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{team_B.corners}</td>
                            </tr>
                        </React.Fragment>
                    );
                })}
        </tbody>
    </table>
</div>
    );
};

export default MatchTableWithDropdown;
