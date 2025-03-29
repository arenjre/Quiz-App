import { useState } from "react";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import { Container, Typography } from "@mui/material";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Quiz App
      </Typography>
      {!selectedQuiz ? (
        <QuizList onSelectQuiz={setSelectedQuiz} />
      ) : (
        <Quiz quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      )}
    </Container>
  );
}

export default App;
