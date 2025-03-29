import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

export default function Quiz({ quiz, onBack }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (questionIndex, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) correct++;
    });
    setFeedback(`You got ${correct} out of ${quiz.questions.length} correct!`);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {quiz.title}
      </Typography>
      {quiz.questions.map((q, index) => (
        <Card key={index} sx={{ mb: 2, p: 2 }}>
          <CardContent>
            <Typography variant="body1">{q.question}</Typography>
            <RadioGroup
              value={userAnswers[index] || ""}
              onChange={(e) => handleAnswer(index, e.target.value)}
            >
              {q.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
      {feedback && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          {feedback}
        </Typography>
      )}
      <Button variant="outlined" color="secondary" onClick={onBack} sx={{ mt: 2 }}>
        Back
      </Button>
    </div>
  );
}
