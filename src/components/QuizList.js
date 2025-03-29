import { useState, useEffect } from "react";
import quizzesData from "../data/quizzes.json";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function QuizList({ onSelectQuiz }) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes(quizzesData);
  }, []);

  return (
    <div>
      {quizzes.map((quiz) => (
        <Card key={quiz.id} sx={{ mb: 2, p: 2 }}>
          <CardContent>
            <Typography variant="h6">{quiz.title}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSelectQuiz(quiz)}
              sx={{ mt: 1 }}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
