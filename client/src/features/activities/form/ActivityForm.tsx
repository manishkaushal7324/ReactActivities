import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";


type Props = {
    activity?: Activity
    closeForm: () => void;    
}
export default function ActivityForm({ activity, closeForm }: Props) {

    const { updateActivity, createActivity } = useActivities();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
        else {
            await createActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
    }

    return (
        <Paper sx={{ padding: 3, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Create Activity
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="title" label="Title" defaultValue={activity?.title} variant="outlined" />
                <TextField name="description" label="Description" defaultValue={activity?.description} variant="outlined" multiline rows={3} />
                <TextField name="category" label="Category" defaultValue={activity?.category} variant="outlined" />
                <TextField name="date" label="Date" defaultValue={activity?.date ?
                    new Date(activity.date).toISOString().split('T')[0] :
                    new Date().toISOString().split('T')[0]} variant="outlined" type="date" />
                <TextField name="city" label="City" defaultValue={activity?.city} variant="outlined" />
                <TextField name="venue" label="Venue" defaultValue={activity?.venue} variant="outlined" />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    <Button onClick={closeForm} variant="outlined" color="inherit">Cancel</Button>
                    <Button type="submit" variant="contained" color="success"
                        disabled={updateActivity.isPending || createActivity.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}