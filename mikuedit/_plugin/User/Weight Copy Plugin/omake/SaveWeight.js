/*
*/

var FileUtil = {};
(function () {
    function with_file(m, f) {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var ts = m(fso);
        try {
            f(ts);
        } catch (e) {
            throw e;
        } finally {
            ts.Close();
        }
    }
    FileUtil.withCreateFile = function (path, f) {
        with_file(function (fso) { return fso.CreateTextFile(path, true); }, f);
    };
    FileUtil.withReadFile = function (path, f) {
        with_file(function (fso) { return fso.OpenTextFile(strFileName, 1); }, f);
    };
}());


function main () {
    for(var i=0; i<Selection.Count; i++){
        var o = Selection(i);
        if( "polymsh" == o.Type ) break;
    }

    if( "polymsh" != o.Type ) {
        return;
    }

    var polymesh = o.ActivePrimitive.Geometry;
    var vertices = polymesh.Vertices;

    var buf = new Array(vertices.Count);
    for (var i=0; i<vertices.Count; ++i) {
        var vtx = vertices.Item(i);
        buf[i] = [vtx.Position.x, vtx.Position.y, vtx.Position.z];
    }

    if( 0 == o.Envelopes.Count ) {
        return;
    }
    var env = o.Envelopes(0);
    for (var i=0; i<env.Deformers.Count; ++i) {
        var deformer = env.Deformers(i);
        var weights = (new VBArray(env.getdeformerweights(deformer))).toArray();
        for (var j=0; j<weights.length; ++j) {
            if (weights[j] !== 0.0) {
                buf[env.Elements.Item(j)].push(deformer.Name);
                buf[env.Elements.Item(j)].push(weights[j]);
            }
        }
    }

    var oFileBrowser = new ActiveXObject("XSI.UIToolKit").FileBrowser;

    oFileBrowser.DialogTitle = "Save weight file";
    oFileBrowser.Filter = "weight data (*.txt;*.csv)|*.txt;*.csv|All Files (*.*)|*.*||";

    oFileBrowser.ShowSave();
    LogMessage(oFileBrowser.FilePathName);

    if( "" != oFileBrowser.FilePathName ){
        FileUtil.withCreateFile(oFileBrowser.FilePathName,
                                function (ts) {
                                    ts.WriteLine("Modtool Envelope Weight")
                                    for (var i=0; i<buf.length; ++i)
                                        ts.WriteLine(buf[i].join(','));
                                });
    }
}

main();
