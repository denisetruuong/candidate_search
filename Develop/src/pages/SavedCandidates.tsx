import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const candidates: Candidate[] = []; // Add an array of candidates and define its type

  return (
    <div> {/* Wrap the JSX elements in a parent element */}
      <h1>Possible Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Company</th>
            <th>Location</th> {/* Fix the closing tag for 'th' */}
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
        {JSON.parse(localStorage.getItem("savedCandidates") ?? "[]")?.length === 0 ? (
            <tr>
              <td colSpan={7}>No candidates saved</td>
            </tr>
          ) : (
            JSON.parse(localStorage.getItem("savedCandidates") || "[]").map((candidate: Candidate, index:number) => (
              <tr key={index}>
                <td>
                </td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>{candidate.bio}</td>
                <td>
                  <button className="btnX"
                    onClick={() => {
                      const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
                      const newCandidates = savedCandidates.filter((c: Candidate) => c.login !== candidate.login);
                      localStorage.setItem("savedCandidates", JSON.stringify(newCandidates));
                      window.location.reload();
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
