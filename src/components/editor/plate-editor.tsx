'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Plate } from '@udecode/plate/react';
import { useEditorRef } from '@udecode/plate/react';
import { useCreateEditor } from '@/components/editor/use-create-editor';
import { SettingsDialog } from '@/components/editor/settings';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';
import { YjsPlugin } from '@udecode/plate-yjs/react';
export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        onChange={(value) => {
          const sharedType = editor;
          console.log(value);
        }}
        editor={editor}
      >
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>
        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
