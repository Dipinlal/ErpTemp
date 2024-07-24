// Import required dependencies
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as ButtonM,
  Box,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import SortableItemComponent from './SortableItemComponent';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../../config';

// Initialize column data with unique string IDs
const initialColumns = [
  { id: 'column-1', name: 'ModifiedBy' },
  { id: 'column-2', name: 'sProfileName' },
  { id: 'column-3', name: 'CreatedBy' },
  
];

const buttonStyle ={
    backgroundColor: secondryColor,
    color: primaryButtonColor,
    textTransform: 'none',
    padding: "4px",
    '&:hover': {
      backgroundColor: secondryColor, // Change as needed
      color: primaryButtonColor // Example hover color change
    },
    
  }

// Main drag-and-drop dialog component
const DraggableColumnsDialog = ({ open, onClose }) => {
    const [columns, setColumns] = useState(initialColumns);
    const [standardFieldsOpen, setStandardFieldsOpen] = useState(false);

    const openStandardFieldsDialog = () => setStandardFieldsOpen(true);
    const closeStandardFieldsDialog = () => setStandardFieldsOpen(false);
  
    // Configure sensors for DnD
    const sensors = useSensors(
      useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
      useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );
  
    // Handle drag end
    const onDragEnd = (event) => {
      const { active, over } = event;
  
      if (active.id !== over.id) {
        const oldIndex = columns.findIndex((item) => item.id === active.id);
        const newIndex = columns.findIndex((item) => item.id === over.id);
  
        setColumns((prevColumns) => arrayMove(prevColumns, oldIndex, newIndex));
      }
    };
  
    return (<>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle
          gutterBottom
          component="div"
          sx={{ backgroundColor: thirdColor, textAlign: 'center', padding: '0px' }}
        >
          Customize Display Columns
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{ position: 'absolute', right: 2, top: 2, padding: '0px' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={columns} strategy={rectSortingStrategy}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  overflowX: 'auto', // Enable horizontal scrolling
                  border: '1px solid #000000',
                  padding: '1px',
                  margin: '8px 0'
                }}
              >
                {columns.map((column) => (
                  <SortableItemComponent key={column.id} id={column.id} item={column} />
                ))}
              </Box>
            </SortableContext>
          </DndContext>
        </DialogContent>
        <DialogActions>
          <ButtonM onClick={openStandardFieldsDialog} style={buttonStyle}>Standard Fields</ButtonM>
          <ButtonM style={buttonStyle}>Delete Column</ButtonM>
          <ButtonM onClick={onClose} style={buttonStyle}>OK</ButtonM>
          <ButtonM onClick={onClose} style={buttonStyle}>Cancel</ButtonM>
        </DialogActions>
      </Dialog>
      {/* Standard Fields Dialog */}
      <Dialog open={standardFieldsOpen} onClose={closeStandardFieldsDialog} fullWidth maxWidth="sm">
      <DialogTitle
          gutterBottom
          component="div"
          sx={{ backgroundColor: thirdColor, textAlign: 'center', padding: '0px' }}
        >
          Customize Display Columns
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{ position: 'absolute', right: 2, top: 2, padding: '0px' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            This dialog can have custom content representing the "Standard Fields."
          </Typography>
        </DialogContent>
        <DialogActions>
          <ButtonM onClick={closeStandardFieldsDialog} style={buttonStyle}>Close</ButtonM>
        </DialogActions>
      </Dialog>
      </>
    );
  };
  
  export default DraggableColumnsDialog;
