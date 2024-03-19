import React from 'react';
import { Modal, Button, Typography, Box } from '@mui/material'
import { IoCloseCircleOutline } from "react-icons/io5";
import FormStadiumCreate from './FormStadiumCreate';

export default function ModalCardStadium({loadStadiumWhenClose}: any){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div className='w-[480px] lg:w-full'>
      <div className='bg-indigo-800 rounded text-white mb-4 text-center w-52'>
        <Button onClick={handleOpen} sx={{color: '#fff', fontWeight: 'bold'}}>Cadastrar arena</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          left: '50%',
          top: '50%',
          minWidth: '90%',
          background: '#3730a3',
          transform: 'translate(-50%, -50%)',
          border: '2px solid #000',
          boxShadow: 24,
          borderRadius: '20px',
          p: 2,}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '32px', marginBottom: '-4%'}}>
            Cadastrar arena
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormStadiumCreate />
            <button className='absolute cursor-pointer top-2 right-2 lg:top-6 lg:right-8' onClick={() => {handleClose(); loadStadiumWhenClose()}}>
              <IoCloseCircleOutline size={32} color='#fff' />
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
    
  )
}