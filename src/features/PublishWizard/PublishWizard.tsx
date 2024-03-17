'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mutator } from '@/lib/mutator';
import useSWRMutation from 'swr/mutation';

const PublishWizard = () => {
  const { trigger } = useSWRMutation('/api/publish', mutator);

  const publish = () => {
    console.log('Publishing...');
    trigger();
  };

  return (
    <>
      <div className="PublishWizard">
        <div className="p-7">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="mt-4">
            <Button onClick={publish}>Publish</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishWizard;
