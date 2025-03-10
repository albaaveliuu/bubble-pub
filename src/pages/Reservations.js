import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TableBarIcon from '@mui/icons-material/TableBar';
import CelebrationIcon from '@mui/icons-material/Celebration';
import emailjs from '@emailjs/browser';

const MotionPaper = motion.create(Paper);

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_yj6ucds',
  templateId: 'template_pkikjsf',
  publicKey: 'uKfBC5aQwy-EynMiI',
  privateKey: '_eY7h3emeh7iUWwyB9KjF'
};

// Email template data
const getEmailTemplateData = (formData, selectedDate, selectedTime, selectedTable) => {
  const table = tables.find(t => t.id === selectedTable);
  return {
    to_email: 'albaveliuu@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    date: selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: selectedTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    }),
    table_name: table ? table.name : 'Not specified',
    table_capacity: table ? table.capacity : 'Not specified',
    guests: formData.guests,
    special_requests: formData.specialRequests || 'No special requests',
    subject: `New Reservation from ${formData.name}`,
    message: `
New Reservation Details:
------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${selectedDate.toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}
Time: ${selectedTime.toLocaleTimeString('en-US', { 
  hour: '2-digit', 
  minute: '2-digit',
  hour12: true 
})}
Table: ${table ? table.name : 'Not specified'}
Capacity: ${table ? table.capacity : 'Not specified'} people
Number of Guests: ${formData.guests}
Special Requests: ${formData.specialRequests || 'None'}

This reservation was made through the BUBBLE Pub website.
    `.trim()
  };
};

const steps = ['Select Date & Time', 'Choose Table', 'Enter Details'];

const tables = [
  { id: 1, name: 'Table 1', capacity: 2 },
  { id: 2, name: 'Table 2', capacity: 4 },
  { id: 3, name: 'Table 3', capacity: 6 },
  { id: 4, name: 'Table 4', capacity: 2 },
  { id: 5, name: 'Table 5', capacity: 4 },
  { id: 6, name: 'Table 6', capacity: 6 },
];

const successMessages = [
  "Yasss queen! Your table is ready to slay! 💅✨",
  "Honey, your reservation is giving everything we need! 🌈",
  "Work it! Your table is booked and looking fabulous! 💃",
  "Serving looks and now serving your reservation! 💁‍♀️",
  "Your table is booked and it's giving main character energy! ⭐",
  "Slay alert! Your reservation is confirmed! 💅",
  "Your table is booked and it's giving everything! 💖",
  "Honey, your reservation is giving life! 🌟",
  "Your table is booked and it's giving perfect! 💫",
  "Serving excellence with your confirmed reservation! ✨",
];

const Reservations = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTable, setSelectedTable] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequests: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate all fields
    if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime || !formData.guests) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Send email using EmailJS with enhanced template data
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        getEmailTemplateData(formData, selectedDate, selectedTime, selectedTable),
        EMAILJS_CONFIG.publicKey
      );

      // Show success message
      const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
      setSuccessMessage(randomMessage);
      setShowSuccess(true);

      // Reset form
      setActiveStep(0);
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedTable('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        specialRequests: '',
      });
    } catch (error) {
      setError('Failed to send reservation. Please try again later.');
      console.error('Email error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setOpen(false);
    setSuccessMessage('');
    setError('');
    setLoading(false);
  };

  const getRandomMessage = () => {
    return successMessages[Math.floor(Math.random() * successMessages.length)];
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Date"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  sx={{ width: '100%' }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                      error: !selectedDate,
                      helperText: !selectedDate ? 'Please select a date' : ''
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Select Time"
                  value={selectedTime}
                  onChange={setSelectedTime}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  minTime={new Date(0, 0, 0, 9)}
                  maxTime={new Date(0, 0, 0, 23)}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            {tables.map((table) => (
              <Grid item xs={12} sm={6} md={4} key={table.id}>
                <Paper
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    border: selectedTable === table.id ? '2px solid #FF69B4' : 'none',
                    '&:hover': {
                      border: '2px solid #9370DB',
                    },
                  }}
                  onClick={() => setSelectedTable(table.id)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TableBarIcon sx={{ mr: 1, color: '#FF69B4' }} />
                    <Typography variant="h6">{table.name}</Typography>
                  </Box>
                  <Typography variant="body2">
                    Capacity: {table.capacity} people
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Number of Guests"
                type="number"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Special Requests"
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequests: e.target.value })
                }
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ pt: 8, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Make a Reservation
        </Typography>

        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              {activeStep !== 0 && (
                <Button
                  onClick={handleBack}
                  sx={{ mr: 2 }}
                >
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                    },
                  }}
                >
                  Confirm Reservation
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                    },
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </MotionPaper>

        <Dialog
          open={showSuccess}
          onClose={handleCloseSuccess}
          maxWidth="sm"
          fullWidth
        >
          <DialogContent sx={{ textAlign: 'center', py: 4 }}>
            <CelebrationIcon sx={{ fontSize: 60, color: '#FF69B4', mb: 2 }} />
            <DialogTitle sx={{ 
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}>
              Thank You for Your Reservation!
            </DialogTitle>
            <Typography variant="h6" sx={{ mt: 2, color: '#9370DB' }}>
              {successMessage}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
              We'll send you a confirmation email shortly.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button
              onClick={handleCloseSuccess}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                },
              }}
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Reservations; 