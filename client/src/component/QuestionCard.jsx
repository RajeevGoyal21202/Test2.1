import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const QuestionCard = ({item}) => {
  return (
    <div>
      <Stack sx={{ m: 5 }}>

        <Card sx={{ width: "100%", height: "230px", border: "1px solid black" }}>
          <CardContent>
            <Stack >
              <Typography></Typography>
            </Stack>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">{item.description}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label={item.options.option1} />
                <FormControlLabel value="male" control={<Radio />} label={item.options.option2} />
                <FormControlLabel value="other" control={<Radio />} label={item.options.option3} />
                <FormControlLabel value="other2" control={<Radio />} label={item.options.option4} />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Stack>

    </div>
  )
}

export default QuestionCard
