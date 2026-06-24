import zipfile
import xml.etree.ElementTree as ET
import os
import re

def extract_text_from_pptx(pptx_path):
    if not os.path.exists(pptx_path):
        print(f"Error: {pptx_path} does not exist.")
        return

    # Namespaces used in pptx xml files
    namespaces = {
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'
    }

    try:
        with zipfile.ZipFile(pptx_path, 'r') as archive:
            # List all files and find slides
            all_files = archive.namelist()
            slide_files = sorted(
                [f for f in all_files if f.startswith('ppt/slides/slide') and f.endswith('.xml')],
                key=lambda x: int(re.search(r'slide(\d+)\.xml', x).group(1))
            )

            print(f"Found {len(slide_files)} slides. Extracting text...")
            
            with open("extracted_presentation.md", "w", encoding="utf-8") as out_file:
                out_file.write("# Google Slides Presentation Content\n\n")
                
                for slide_file in slide_files:
                    slide_num = re.search(r'slide(\d+)\.xml', slide_file).group(1)
                    out_file.write(f"## Slide {slide_num}\n\n")
                    
                    # Read the slide XML content
                    xml_content = archive.read(slide_file)
                    root = ET.fromstring(xml_content)
                    
                    # Find all text elements in the slide XML
                    # In pptx, text is inside <a:t> elements which are inside <a:r> (run) elements, which are inside <a:p> (paragraph) elements
                    paragraphs = root.findall('.//a:p', namespaces)
                    
                    slide_text = []
                    for p in paragraphs:
                        paragraph_text = []
                        # Find all text runs within this paragraph
                        text_elements = p.findall('.//a:t', namespaces)
                        for t in text_elements:
                            if t.text:
                                paragraph_text.append(t.text)
                        
                        if paragraph_text:
                            full_p_text = "".join(paragraph_text).strip()
                            if full_p_text:
                                slide_text.append(full_p_text)
                    
                    if slide_text:
                        for line in slide_text:
                            out_file.write(f"- {line}\n")
                        out_file.write("\n")
                    else:
                        out_file.write("*(No text content detected on this slide)*\n\n")
            
            print("Successfully extracted slide content to `extracted_presentation.md`!")
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    extract_text_from_pptx("presentation.pptx")
