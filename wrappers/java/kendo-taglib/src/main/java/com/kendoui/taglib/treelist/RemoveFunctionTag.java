
package com.kendoui.taglib.treelist;

import com.kendoui.taglib.FunctionTag;

import com.kendoui.taglib.TreeListTag;


import javax.servlet.jsp.JspException;

@SuppressWarnings("serial")
public class RemoveFunctionTag extends FunctionTag /* interfaces */ /* interfaces */ {
    
    @Override
    public int doEndTag() throws JspException {
//>> doEndTag


        TreeListTag parent = (TreeListTag)findParentWithClass(TreeListTag.class);


        parent.setRemove(this);

//<< doEndTag

        return super.doEndTag();
    }

    @Override
    public void initialize() {
//>> initialize
//<< initialize

        super.initialize();
    }

    @Override
    public void destroy() {
//>> destroy
//<< destroy

        super.destroy();
    }

//>> Attributes
//<< Attributes

}